import { useParams } from "react-router-dom"

export default function TerminalAppProject(){
    let { versionNumber } = useParams();

    return(
        <div>
            <h1>My Terminal App Project</h1>
            <p>Here is a list of features in my terminal app project</p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
            </ul>
            {versionNumber && <p> Version Number: {versionNumber}</p>}
            
        </div>
    )
}