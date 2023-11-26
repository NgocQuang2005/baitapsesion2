
type cvbar = {
    names: string;
    acs?: string;
    sar:string;
}

const Avtrt = ({names, acs, sar} : cvbar) => {
  return (
    <li >
        <strong>{names}:</strong> <b>{acs}</b>
        {sar}
    </li>
  )
}

export default Avtrt