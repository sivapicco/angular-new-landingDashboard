import {Injectable} from '@angular/core';
import {Widget} from '../shared/widgets';

@Injectable({
    providedIn: 'root'
})
export class WidgetService {

    constructor() {
    }

    getwidgets(): Widget[] {
        return [
            {
                widgetApp: 'MWM',
                widgetkey: 99314,
                url: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/MWMWidget/BranchWidget',
                detailurl: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/MWM/ModernWealthManagementDashboard',
                container: 'container1',
                name: 'Modern Wealth Management',
                sheetToFilter: 'Bar Chart',
                category: 'AMD',
                image: 'design1.png'

            },
            {
                widgetApp: 'DISABLED',
                widgetkey: 99315,
                url: 'https://tabwmadtqa-na.ms.com/t/WMADT-QA/views/PTI_POC_Oct16_TDQA/db_widget',
                detailurl: 'https://tabwmadtqa-na.ms.com/t/WMADT-QA/views/ActivityManagementDashboard_QA_Bench3/db_volume_trend',
                container: 'container2',
                name: 'Branch Call Activity',
                sheetToFilter: 'weekly',
                category: 'AMD',
                image: 'design2.png'
            },
            {
                widgetApp: 'RISKPS',
                widgetkey: 99427,
                url: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/FARiskProfileSearchWidget/RiskProfileSearch',
                detailurl: 'https://tabwmuqa-na.ms.com/t/RISK-ANALYTICS-QA/views/FARiskProfileSearch/FASummary',
                container: 'container3',
                name: 'Top FA Profiles in context',
                sheetToFilter: 'widgetsheet',
                category: 'Risk',
                image: 'design3.png'

            },
            {
                widgetApp: 'WMVIZ',
                widgetkey: 99428,
                url: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/BMR-RiskWidget/BMRSummary',
                detailurl: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/BMR-Dashboard-ENTL-PTI/BMRSummary',
                container: 'container4',
                name: 'BMR Risk',
                sheetToFilter: 'widgetsheet',
                category: 'Risk',
                image: 'design4.png'

            },
            {
                widgetApp: 'WMFLSH',
                widgetkey: 99429,
                url: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/WealthManagementFlashWidget/WMFlashWidget',
                detailurl: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/WealthManagementFlash/FlashDashboard',
                container: 'container5',
                name: 'Wealth Management Flash',
                sheetToFilter: 'Sheet 25',
                category: 'AMD',
                image: 'design5.png'

            },
            {
                widgetApp: 'MWMHYP',
                widgetkey: 99430,
                url: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/MWMWidget/BranchWidget',
                detailurl: 'https://tabwmuqa-na.ms.com/t/WMAIDT-QA/views/MWMHyperconnected/ModernWealthManagementDashboard',
                container: 'container6',
                name: 'MWM Hyper',
                sheetToFilter: 'widgetsheet',
                category: 'Risk',
                image: 'design6.jpeg'

            }
        ];
    }


}
