export default 
{
    summary: (content) =>
    {
        let innerContent = "";
        for(let info of content)
        {
            innerContent += summaryRow(info);
        }

        return `
        <div class="info">
            ${innerContent}
        </div>
        `
    },

    tableHead: (content) => 
    {
        let innerContent = "";
        for(let word of content)
        {
            innerContent += 
            `
            <div class="table-header-cell">
                <p class="cell-title">${word}</p>
            </div>
            `
        }

        return `
        <div class="table-row">
            ${innerContent}
        </div>
        `
    },

    tableSection: (content) => 
    {
        return `
        <div class="table-row">
            <div class="table-separator">
                <p class="separator-text">${content}</p>
            </div>
        </div>
        `
    }, 

    tableRow: (content) => 
    {
        let innerContent = "";
        for(let word of content)
        {
            innerContent += 
            `
            <div class="table-cell">
                <p class="cell">${word}</p>
            </div>
            `
        }

        return `
        <div class="table-row">
            ${innerContent}
        </div>
        `
    },

    spacer: () => `<div class="spacer"></div>`,

    result: (content) => ` 
    <div class="total">
        <p><strong>${content}</strong></p>
    </div>
    `, 

    notes: (content) => 
    {
        let innerContent = "";
        for(let note of content)
        {
            innerContent += 
            `${note}<br><br>`
        }

        return `
        <div class="notes">
            <p class="notes">
                Notas:<br><br>
                ${innerContent}
            </p>
        </div>
        `
    }
}

const summaryRow = info =>
{
    if (info.length === 4)
    {
        return `
        <div class="info-row">
            <div>
                <p>
                    <strong>${info[0]}:</strong> ${info[1]}
                </p>
            </div>
            <div class="last-info">
                <p>
                    <strong>${info[2]}:</strong> ${info[3]}
                </p>
            </div>
        </div>
        `
    }
    else if (info.length === 2)
    {
        return `
        <div class="info-row">
            <div>
                <p>
                    <strong>${info[0]}:</strong> ${info[1]}
                </p>
            </div>
        </div>
        `
    }
    else
    {
        return `<div class="info-row"></div>`
    }
}