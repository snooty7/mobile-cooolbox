import React, {Component} from 'react';
import {
    Body,
    Text,
    Left,
    Right,
    ListItem
} from "native-base";

class CategoryItem extends Component {

    render() {
        return (
        <ListItem>
            <Body>
             <Text>Access</Text>

            </Body>
            <Right>
                <Text note>Access</Text>
            </Right>

        </ListItem>
        );
    }
}

export default CategoryItem;
