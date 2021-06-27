import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const CardComp = (props) => {
    return(
        <Card>
            <CardHeader action={<IconButton><MoreVertIcon/></IconButton>} title={props.title} />
            <CardContent>
            {props.content}
            </CardContent>
            
        </Card>
    )
}

export default CardComp;