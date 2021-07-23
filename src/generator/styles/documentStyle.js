import { Platform } from 'react-native'

export default `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    div.page {
        width: 100%;
        height: ${Platform.OS === 'android' ? '980' : '960' }px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding-left: ${Platform.OS === 'android' ? '0' : '20' }px;;
        padding-right: ${Platform.OS === 'android' ? '0' : '20' }px;;
    }

    div.content {
        flex: 1;
    }

    div.header {
        width: 100%;
        height: 80px;
        display: flex;
        background-color: #000088;
        padding: 10px;
        justify-content: space-between;
    }

    div.header-right {
        align-self: flex-end;
    }

    p {
        font-size: 14px;
        text-align: left;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        color: rgb(0, 0, 0);
    }

    p.header-title {
        font-size: 14px;
        text-align: right;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        color: #FFFFFF;
    }

    p.header-page {
        font-size: 12px;
        text-align: right;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        color: #FFFFFF;
    }

    img.logo {
        width: 156px;
        height: 20px;
    }

    div.info {
        width: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 38px;
        padding-left: 10px;
    }

    div.info-row {
        width: 100%;
        height: 20px;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    div.last-info {
        width: 300px;
    }

    strong {
        font-weight: bold;
    }

    div.table-row {
        display: flex; 
        flex-direction: row;
        justify-content: flex-start;
        border: 1px solid black;
    }

    div.table-header-cell {
        flex: 1;
        height: 38px;
        display: flex; 
        justify-content: center;
        align-items: center;
        background-color: #8888DD;
        border-right: 1px solid black
    }
    
    div.table-header-cell-last {
        flex: 1;
        height: 38px;
        display: flex; 
        justify-content: center;
        align-items: center;
        background-color: #8888DD;
    }

    p.cell-title {
        font-size: 10px;
        text-align: center;
        font-weight: bold
    }

    div.table-separator {
        height: 38px;
        display: flex; 
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #000000;
    }

    p.separator-text {
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        color: white;
    }

    div.table-cell {
        flex: 1;
        height: 38px;
        display: flex; 
        justify-content: center;
        align-items: center;
        border-right: 1px solid black
    }
    
    div.table-cell-last {
        flex: 1;
        height: 38px;
        display: flex; 
        justify-content: center;
        align-items: center;
    }

    div.total {
        height: 40px;
        display: flex; 
        justify-content: flex-start;
        align-items: center;
        margin-left: 10px;
    }

    p.cell {
        font-size: 10px;
        text-align: center;
        font-weight: normal
    }

    div.spacer {
        height: 40px
    }

    div.notes {
        height: 80px;
        display: flex; 
        justify-content: flex-start;
        align-items: stretch;
        flex-direction: column;
    }

    p.notes {
        font-size: 8px;
        text-align: left;
        font-weight: normal
    } 
    
    div.footer {
        width: 100%;
        height: 80px;
        display: flex;
        background-color: #000088;
        flex-direction: column;
        justify-content: space-around;
        align-items: center
    }
    
    p.footer-text {
        font-size: 14px;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        color: #FFFFFF;
    }
</style>
`