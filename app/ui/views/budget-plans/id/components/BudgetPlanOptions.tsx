

/* ########################################### Modules ########################################### */

// local
import Option from "../../../components/Option";
import DropDownOption from "../../../components/DropDownOption";


/* ########################################### BudgetPlanOptions ########################################### */

export default function BudgetPlanOptions() {
    return (
        <div className="w-[15rem] min-h-[5rem] absolute right-[0px] z-20">
            <Option optionName="Edit" order="first" />
            <DropDownOption optionName="Group By" subOptions={['Item', 'Category']} />
            <DropDownOption optionName="Sort By" subOptions={['Name', 'Amount']} />
            <DropDownOption optionName="Order By" subOptions={['Asc', 'Desc']} order="last"/>
        </div>
    )
}