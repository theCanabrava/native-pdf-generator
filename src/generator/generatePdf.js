import RNHTMLtoPDF from 'react-native-html-to-pdf';
import fs from "react-native-fs";
import { Asset } from "expo-asset";
import generateHtml from './generateHtml';
import logo from './images/logo';

export default async (document) =>
{
    console.log(1);
    const asset = Asset.fromModule(require('../../assets/images/logo.png'));
    console.log(2);
    if (!asset.localUri) {
        await asset.downloadAsync();
    }
    console.log(3);
    const uri = asset.localUri;
    console.log(4);
    console.log(5);

    let options = {
      html: generateHtml(document).split("%COMPANY_LOGO%").join(logo),
      fileName: 'test',
      directory: 'Documents',
      height: 	792,
      width: 612
    };
    console.log(6);

    let file = await RNHTMLtoPDF.convert(options);
    console.log(7);
    console.log(file.filePath);
    console.log(8);
    return file
}