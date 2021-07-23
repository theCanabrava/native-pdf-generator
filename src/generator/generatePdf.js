import RNHTMLtoPDF from 'react-native-html-to-pdf';
import generateHtml from './generateHtml';
import logo from './images/logo';

export default async (document) =>
{
    let options = {
      html: generateHtml(document).split("%COMPANY_LOGO%").join(logo),
      fileName: 'test',
      directory: 'Documents',
      height: 	792,
      width: 612
    };

    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    return file
}