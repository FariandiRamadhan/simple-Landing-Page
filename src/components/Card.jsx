import PropTypes from 'prop-types';
import { objectDatas,icon,optClassDiv } from "../data_and_functions/allDatas";
import { Fragment } from 'react';

Card.propTypes = {
    align: PropTypes.string,
    template: PropTypes.string,
    title: PropTypes.string, 
    image: PropTypes.string, 
    sequent: PropTypes.number
};
export default function Card({align, template, title, image, sequent}){
    const template_opt = template?template:'';
    const align_opt = align?align:'';
    let counter = 0;
    console.log("card renderred");
return(
    <div className="grid min-[240px]:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 opacity-0 card">
        <div className={"cardtext " + align_opt}>
            <h3 className="text-xl font-bold lg:text-2xl mb-2 drop-shadow shadow-slate-600">{title}</h3>
            <div className={optClassDiv[sequent]}>
                {icon[sequent].map((ie,innerIndex)=>{
                    counter += 1;
                    return(<Fragment key={innerIndex}>
                        <i className={sequent == 0?`fa-solid ${ie} col-start-1 lg:col-start-2 lg:col-end-2`:`fa-solid ${icon[sequent][innerIndex]}`}></i>
                        <p className={sequent == 0?`row-start-${counter} col-start-2 lg:col-start-1`:""}>{objectDatas[sequent][innerIndex]}</p>
                        </Fragment>)
                })}
            </div>
        </div>
        <img src={image} alt="bgimage" className= {"w-full break-after-column rounded-md shadow-md shadow-slate-800 " + template_opt}/>
    </div>
)}