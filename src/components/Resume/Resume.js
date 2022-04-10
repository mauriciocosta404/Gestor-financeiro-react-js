import React from "react";
import * as C from './ResumeStyle' ;
import ResumeItems from "../../ResumeItems/ResumeItems";
import {FaRegArrowAltCircleUp,FaRegArrowAltCircleDown,FaDollarSign} from "react-icons/fa";
const Resume=({income,expense,total})=>{
    return(
<C.Container>
<ResumeItems title="entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
<ResumeItems title="saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
<ResumeItems title="total" Icon={FaDollarSign} value={total}/>
</C.Container>

    );
}
export default Resume;