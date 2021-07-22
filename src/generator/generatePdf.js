import RNHTMLtoPDF from 'react-native-html-to-pdf';
import fs from "react-native-fs";
import { Asset } from "expo-asset";
import generateHtml from './generateHtml';

export default async (document) =>
{
    const asset = Asset.fromModule(require('../../assets/images/logo.png'))
    if (!asset.localUri) {
        await asset.downloadAsync();
    }
    const uri = asset.localUri;
    const base64 = await fs.readFile(uri, "base64");

    let options = {
      html: generateHtml(document).split("%COMPANY_LOGO%").join(base64),
      fileName: 'test',
      directory: 'Documents',
      height: 	792,
      width: 612
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
    return file
}