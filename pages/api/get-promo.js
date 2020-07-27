
//using next=>
import {GoogleSpreadsheet} from 'google-spreadsheet'//is import
import credentials from '../../credentials.json'
const doc = new GoogleSpreadsheet('1e40ylCqeW-xBZrP5IJ6wxpzHw5-j8oyqauCIej9johs')//create nova instancia

//communication form http <=> (req, res)=>

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
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