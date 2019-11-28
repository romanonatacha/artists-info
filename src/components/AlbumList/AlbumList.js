import React, {Component}  from 'react'
import { useParams } from 'react-router-dom'

function AlbumList() {
    let { id } = useParams()

    return (
        <div>
            {id}
        </div>
    )

}

// export default class AlbumList extends Component {
//     render() {
        
//         let { id } = useParams()
        
//         return (
//             <div>
//                 {id}
//             </div>
//         )
//     }
// }

export default AlbumList