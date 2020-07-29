
//using next=>
import {GoogleSpreadsheet} from 'google-spreadsheet'//is import
//import credentials from '../../credentials.json'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)//create nova instancia
import {fromBase64} from '../../utils/base64'

//communication form http <=> (req, res)=>

export default async (req, res) => {
    //console.log(process.env.VAR1)//para saber se está funcionado, uso só backend
    //console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))
    try {
        //await doc.useServiceAccountAuth(credentials)
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        //console.log(doc.title)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')
        //console.log(sheet.title)

        const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
        //console.log(mostrarPromocaoCell.value)

        const textoCell = sheetConfig.getCell(1, 1)
        //console.log(textoCell.value)

        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
          }))
        } catch (err) {
            res.end(JSON.stringify({
              showCoupon: false,
              message: ''
            }))
        }
}

//need to install googlespreadsheet <=> npm install google-spreadsheet
/*
export default async(req, res) =>{
    res.end(JSON.stringify({
        showCoupon: true,
        message: 'Coupon message'
    }))
}
*/