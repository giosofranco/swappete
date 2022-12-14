import {
    Link
} from 'react-router-dom'
import Card from '../Card/Card'
import closeBtn from '../../assets/images/ionic-md-close.svg'
import linkicon from '../../assets/images/link-icon.svg'
import Button from '../Button/Button'
import './RoiModal.scss'

const RoiModal = ({
    roiModalData,
    handleClose,
    lpDetails
}) => {
    const handleROI = (day, liquidity) => {
        const lq = liquidity ? 1000 : roiModalData.liquidity;
        const apr = ((roiModalData.allocPoint / roiModalData.totalAllcationPoint) * ((roiModalData.anchorPerBlock / 10 ** 18) * 28800 * day * 100 * roiModalData.anchorPrice)) / lq;
        return apr.toFixed(2);
    }

    const handleAnchorPerThousand = (day) => {
        const totalLpWorth = roiModalData.liquidity;
        const anchorPerThousand = (1000 * (roiModalData.anchorPerBlock / 10 ** 18) * 28800 * day * (roiModalData.allocPoint / roiModalData.totalAllcationPoint)) / totalLpWorth;
        return anchorPerThousand.toFixed(2);
    }

    return ( <
        >
        <
        div className = "backdrop" > < /div> <
        Card className = "selectCurrency_modal roimodel" >
        <
        div className = "col modal_headerStyle" >
        <
        div className = "row modal_headerStyle__rowA lessMargin_bottom" >
        <
        div className = "  modal_headerStyle__rowA_colLeft" >
        <
        h2 > Return on Invest < /h2> <
        /div> <
        div className = "col modal_headerStyle__rowA_colRight" >

        <
        Link to = "#"
        onClick = {
            handleClose
        } > < img src = {
            closeBtn
        }
        alt = "icon" / > < /Link> <
        /div> <
        /div> <
        /div> <
        div className = "row  roibodyBox" >
        <
        div className = "col viewbox" >
        <
        table >
        <
        thead >
        <
        tr >
        <
        th > Timeframe < /th> <
        th > ROI < /th> <
        th > ANCHOR PER $1000 < /th> <
        /tr> <
        /thead> <
        tbody >
        <
        tr >
        <
        td > 1 d < /td> <
        td > {
            handleROI(1, false)
        } % < /td> <
        td > {
            handleAnchorPerThousand(1)
        } < /td> <
        /tr> <
        tr >
        <
        td > 7 d < /td> <
        td > {
            handleROI(7, false)
        } % < /td> <
        td > {
            handleAnchorPerThousand(7)
        } < /td> <
        /tr> <
        tr >
        <
        td > 30 d < /td> <
        td > {
            handleROI(30, false)
        } % < /td> <
        td > {
            handleAnchorPerThousand(30)
        } < /td> <
        /tr> <
        tr >
        <
        td > 365 d(APR) < /td> <
        td > {
            handleROI(365, false)
        } % < /td> <
        td > {
            handleAnchorPerThousand(365)
        } < /td> <
        /tr> <
        /tbody> <
        /table> <
        p > Calculated based on current rates.Compounding < br / > once daily.Rates are estimates provided
        for your < br / > convenience only, and by no means represent < br / > guaranteed returns. < /p>

        <
        Link to = "liquidity"
        className = "btn buttonStyle"
        onClick = {
            handleClose
        } > Get {
            lpDetails ? .lpTokenName
        } < img src = {
            linkicon
        }
        alt = "icon" / > < /Link> <
        /div> <
        /div> <
        /Card> <
        />
    );

}

export default RoiModal;