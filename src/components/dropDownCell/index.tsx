import React from "react";
import { ReactComponent as CheckIcon } from "../../assets/Icons/checkedIcon.svg";
import { ReactComponent as CheckHover } from "../../assets/Icons/checkedHover.svg";
import { ReactComponent as UncheckIcon } from "../../assets/Icons/uncheck.svg";
import { ReactComponent as UncheckHover } from "../../assets/Icons/uncheckHover.svg";
import "../dropDownCell/index.css"
interface DropDownCellProps {
  label: string;
  isSelected: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  className?: string;
}

const DropDownCell: React.FC<DropDownCellProps> = ({
  label,
  isSelected,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`dropdown-cell ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <span className="labelStyle">{label}</span>
      {isSelected ? (
        isHovered ? (
          <CheckHover width="22" height="22" />
        ) : (
          <CheckIcon width="22" height="22" />
        )
      ) : isHovered ? (
        <UncheckHover width="22" height="22" />
      ) : (
        <UncheckIcon width="22" height="22" />
      )}
    </div>
  );
};

export default DropDownCell;
