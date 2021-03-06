import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  constructor(props) {
    super(props);
    this.state = { active: undefined };
  }

  render() {
    const { active } = this.state;

    return (
      <Example name="Interactable and active list of Cards">
        <Snippet>
          <CardList separators={ true } snippetIgnore={ true }>
            <Card
                active={ active === 0 }
                onClick={ () => this.setState({ active: 0 }) }>
              <CardContent snippetReplace={ true }  />
            </Card>

            <Card
                active={ active === 1 }
                onClick={ () => this.setState({ active: 1 }) }>
              <CardContent snippetReplace={ true }  />
            </Card>

            <Card
                active={ active === 2 }
                onClick={ () => this.setState({ active: 2 }) }>
              <CardContent snippetReplace={ true }  />
            </Card>
          </CardList>
        </Snippet>
      </Example>
    );
  }
}
