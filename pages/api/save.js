
import { GoogleSpreadsheet } from 'google-spreadsheet'
//import credentials from '../../credentials.json'
import moment from 'moment'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHssSSS')).toString(16).toUpperCase()
    return code.substr(0, 4) +  '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
    try {
        //await doc.useServiceAccountAuth(credentials)
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY 
        })
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')

        const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''
        if (mostrarPromocaoCell.value === 'VERDADEIRO') {
            //TODO: gerar cupom
            //Cupom = parseInt(moment().format('YYMMDDHHmmss SSS')).toString(16).toUpperCase()
            Cupom = genCupom()
            Promo = textoCell.value 
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            //'Data Preenchimento': new Date(),
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
            Cupom,
            Promo
        })
        //res.end(req.body)
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))//convert to text
    } catch (err) {
        console.log(err)
        res.end('error')
    }
}

//to handle correct dates and times <=> npm install moment
/*
export default async(req, res) =>{
    //console.log(req.body)
    console.log(JSON.parse(req.body))
    res.end(req.body)
}
*/