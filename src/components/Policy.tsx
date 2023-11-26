type PolicyXs ={
    icon?: React.ReactNode;
    title: string;
    desc: string;
}

function PolicyX ({title, desc, icon} :PolicyXs){
    return (
        <p> 
            <strong>{icon}{title}:</strong>
            {desc}
        </p>
    )
}
export default PolicyX