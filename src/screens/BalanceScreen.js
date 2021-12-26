import StackedColumnChart from "../components/StackedColumnChart"

function BalanceScreen () {
    return (
        <div className="balance">  Balance Parent
            
            <div className="sibling"> Balance sibling
                <div className="inner"> Inner </div>
            </div>

            <div className="sibling"> Balance sibling  </div>    


            {/* <StackedColumnChart/> */}
        </div>
    )
}

export default BalanceScreen;