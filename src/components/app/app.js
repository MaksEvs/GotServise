import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotServise from '../../services/gotService';


export default class App extends Component{
    gotServise = new gotServise();

    state = {
        showRandomChar: true,
        selectedChar: null,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                        {char}
                        <button 
                            className='toggle-btn'
                            onClick={this.toggleRandomChar}>Toggle char</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    {/* <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotServise.getAllBooks}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails 
                            charId={ this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.gotServise.getAllHouses}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails 
                            charId={ this.state.selectedChar}/>
                        </Col>
                    </Row> */}
                        </Container>
            </>
        );
    }
    
};