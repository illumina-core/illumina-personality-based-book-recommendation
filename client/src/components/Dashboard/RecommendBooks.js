import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const RecommendBooks = (props) => {
  return (
    <div class="container" style={{paddingTop:'16px'}}>
      <div class="row" style={{paddingBottom:'12px'}}>
        <div class="col" >
          <Card style={{border:'1.5px solid #151B2D'}}>
            <div class="row">
                <div class="col-sm-4" >
                    <CardImg style={{width:'150px'}} src="./images/redwall.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-8" >
                  <CardBody >
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </div>
            </div>
        </Card>
        </div>
        <div class="col">
          <Card style={{border:'1.5px solid #151B2D'}}>
            <div class="row">
                <div class="col-sm-4">
                    <CardImg style={{width:'150px'}} src="./images/redwall.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-8">
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </div>
            </div>
        </Card>
        </div>
 
      </div>
      <div class="row" style={{paddingBottom:'12px'}}>
        <div class="col" >
          <Card style={{border:'1.5px solid #151B2D'}}>
            <div class="row">
                <div class="col-sm-4" >
                    <CardImg style={{width:'150px'}} src="./images/redwall.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-8" >
                  <CardBody >
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </div>
            </div>
        </Card>
        </div>
        <div class="col">
          <Card style={{border:'1.5px solid #151B2D'}}>
            <div class="row">
                <div class="col-sm-4">
                    <CardImg style={{width:'150px'}} src="./images/redwall.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-8">
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </div>
            </div>
        </Card>
        </div>
 
      </div>
      <div class="row" style={{paddingBottom:'12px'}}>
        <div class="col" >
          <Card style={{border:'1.5px solid #151B2D'}}>
            <div class="row">
                <div class="col-sm-4" >
                    <CardImg style={{width:'150px'}} src="./images/redwall.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-8" >
                  <CardBody >
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </div>
            </div>
        </Card>
        </div>
        <div class="col">
          <Card style={{border:'1.5px solid #151B2D'}}>
            <div class="row">
                <div class="col-sm-4">
                    <CardImg style={{width:'150px'}} src="./images/redwall.jpg" alt="Card image cap" />
                </div>
                <div class="col-sm-8">
                  <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </div>
            </div>
        </Card>
        </div>
 
      </div>

    </div>
  );
};

export default RecommendBooks;