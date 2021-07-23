import renderPages from "./htmlRenderer/renderPages";
import separatePages from "./pageDivider/separatePages"
import documentStyle from "./styles/documentStyle";
import robotoFont from "./styles/robotoFont";

export default (document) =>
{
    const pages = separatePages(document);
    const htmlArray = renderPages(pages, "DEMONSTRATIVO DE PAGAMENTOS PARA IRRF: 15/07/2021");
    const htmlContent = 
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pdf Content</title>
            ${robotoFont}
            ${documentStyle}
        </head>
        <body>
            ${htmlArray.join("\n")}
        </body>
        </html>
    `;
    return htmlContent;
}