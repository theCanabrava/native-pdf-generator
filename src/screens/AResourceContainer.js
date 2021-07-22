import React, { useState } from 'react';
import AResourceLayout from './layouts/AResourceLayout';
import NavigationProps from './proptypes/NavigationProps';
import generatePdf from '../generator/generatePdf';

const AResourceContainer = ({navigation}) =>
{
    const [source, setSource] = useState(undefined);
    const clickBack = async () =>
    {
        const file = await generatePdf(SAMPLE_LENGTHY_DOCUMENT);
        setSource({uri: file.filePath});
    }
    return (
        <AResourceLayout 
            onClickBack={clickBack}
            source={source}
        />
    )
}

const SAMPLE_DOCUMENT =
[
    { type: "summary", content: [[], ["Empreendimento", "Nome do empreendimento", "CNPJ", "9.999.999/0009-99"], ["Identificador", "AAA-9999", "Data da venda", "28/02/2021"], ["Valor da Venda", "R$ 206.60"], [], ["Titular 1", "NOME DO PROPRIETÁRIO", "CPF/CNPJ", "999.999.999-99"], [], ["Endereço", "Rua nome da rua", "Bairro", "Nome do Bairro"], ["Cidade", "São Paulo", "CEP", "99999999"], []] },
    { type: "tableHead", content: ["Status", "Parcela", "Descrição", "Vencimento", "Valor Original", "Correção", "Multa", "Juros de Atraso", "Desconto", "Valor Pago", "Pagamento"] },
    { type: "tableSection", content: "TOTAL PAGO EM 2021" },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "spacer" },
    { type: "result", content: "TOTAL RECEBIDO: R$ 533,33"  },
    { type: "spacer" },
    { type: "notes", content: ["1. Caso a parcela tenha sido paga em atraso será aplicado em cima do valor corrigido 2% de multa por atraso + 0,033333 por dia referente ao juros por atraso.", "2. O índice aplicado sobre a parcela é variável conforme o UF do cliente: Sudeste e Centro Oeste é utilizado o índice de 2 meses anteriores ao vencimento da parcela e Norte e Nordeste é 3 meses anteriores ao vencimento da parcela. Consulta: http://www.portalbrasil.net."] },
]

const SAMPLE_LENGTHY_DOCUMENT =
[
    { type: "summary", content: [[], ["Empreendimento", "Nome do empreendimento", "CNPJ", "9.999.999/0009-99"], ["Identificador", "AAA-9999", "Data da venda", "28/02/2021"], ["Valor da Venda", "R$ 206.60"], [], ["Titular 1", "NOME DO PROPRIETÁRIO", "CPF/CNPJ", "999.999.999-99"], [], ["Endereço", "Rua nome da rua", "Bairro", "Nome do Bairro"], ["Cidade", "São Paulo", "CEP", "99999999"], []] },
    { type: "tableHead", content: ["Status", "Parcela", "Descrição", "Vencimento", "Valor Original", "Correção", "Multa", "Juros de Atraso", "Desconto", "Valor Pago", "Pagamento"] },
    { type: "tableSection", content: "TOTAL PAGO EM 2021" },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "tableRow", content: ["OK", "23 - 1/1", "Sinal - 1 de 1", "30/06/2021", "R$ 533,33", "R$ 0", "R$ 0", "R$ 0", "R$ 0", "R$ 533,33", "29/04/2021"] },
    { type: "spacer" },
    { type: "result", content: "TOTAL RECEBIDO: R$ 533,33"  },
    { type: "spacer" },
    { type: "notes", content: ["1. Caso a parcela tenha sido paga em atraso será aplicado em cima do valor corrigido 2% de multa por atraso + 0,033333 por dia referente ao juros por atraso.", "2. O índice aplicado sobre a parcela é variável conforme o UF do cliente: Sudeste e Centro Oeste é utilizado o índice de 2 meses anteriores ao vencimento da parcela e Norte e Nordeste é 3 meses anteriores ao vencimento da parcela. Consulta: http://www.portalbrasil.net."] },
]

AResourceContainer.propTypes = NavigationProps;
export default AResourceContainer;
