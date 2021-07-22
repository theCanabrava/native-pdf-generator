import React from 'react';
import {AuthStore} from './src/contexts/AuthContext'
import { RestrictedStore } from './src/contexts/RestrictedContext';
import NavigationRoot from './src/navigation/NavigationRoot';
import LoadApp from './src/startup/LoadApp';
import Updater from './src/startup/Updater';
import AResource from './src/screens/AResourceContainer';
/*
const App =  () =>
(
    <AuthStore>
        <RestrictedStore>
            <Updater/>
            <LoadApp component={NavigationRoot}/>
        </RestrictedStore>
    </AuthStore>
)
*/
const App =  () =>
(
    <AResource/>
)
export default App;