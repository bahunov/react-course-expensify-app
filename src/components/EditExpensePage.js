import React from 'react';
import {NavLink} from 'react-router-dom';

const EditExpensePage = () => {
    let id1 = 1
    let id2 = 2
    let id3 = 3
    return (
    <div>
        Edit page...!!!
        <NavLink to={'edit/'+id1} activeClassName="is-active">Edit Page {id1} </NavLink>
    </div>
    );
}

export default EditExpensePage;