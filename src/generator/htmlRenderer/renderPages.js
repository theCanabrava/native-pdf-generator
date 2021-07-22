import ElementRenderer from "./ElementRenderer";

export default (pages, title) =>
{
    const htmlArray = [];
    for(let i in pages)
    {
        htmlArray.push(renderPage(pages[i], title, Number(i)+1, pages.length));
    }
    return htmlArray;
}

const renderPage = (page, title,index, total) =>
{
    let innerContent = "";
    for(let line of page)
    {
        innerContent += ElementRenderer[line.type](line.content);
    }

    return `
    <div class="page">
        <div class="header">
            <div class="header-left">
                <img class="logo" src="data:image/png;base64,%COMPANY_LOGO%"/>
            </div>
            <div class="header-right">
                <p class="header-title">${title}</p>
                <p class="header-page">Página ${index} de ${total}</p>
            </div>
        </div>
        <div class="content">
            ${innerContent}
        </div>
        <div class="footer">
            <img class="logo" src="data:image/png;base64,%COMPANY_LOGO%"/>
            <p class="footer-text">Central de Relacionamento 4002-2600<br>De segunda a sexta-feira, das 9h às 17h (exceto feriados)</p>
        </div>
    </div>
    `
} 