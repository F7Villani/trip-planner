import { ReactElement } from "react";
import Step from "../../enums/Step";
import './StepperItem.css';

interface StepperItemProps {
  step: Step;
  label: string;
  sublabel?: string;
  onClick: (step: Step) => void;
  icon: ReactElement;
  enabled?: boolean;
  selected?: boolean;
}

function StepperItem({step, label, onClick, icon, enabled = true, sublabel: subLabel = null, selected = false}: StepperItemProps){

  function handleClick(event : any) : void {
    if(enabled){
      onClick(step);
    }
  }

  function getStepperItemClasses() : string {
    let classes = ["stepper-item"];
    if(!enabled){
      classes.push("disabled");
    }
    if(selected){
      classes.push("selected");
    }
    return classes.join(" ");
  }

  return (
    <li className={getStepperItemClasses()} onClick={handleClick}>
      <div className="icon">
        {icon}
      </div>
      <div>
        <p>{label}</p>
        {
          subLabel ?
          <p className="sublabel">{subLabel}</p> :
          null
        }
      </div>
    </li>
  );
}

export default StepperItem;