import React from 'react';
import {Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";

import './PersonCard.css';

const PersonCard = ({ person, onClick }) => (
  <section className={"card"} onClick={ () => onClick && onClick(person) }>
    <Card classes={{ root : "person-card"}}>
      <CardActionArea>
        <CardMedia
          classes={{root : "card_media"}}
          image={ `https://uinames.com/api/photos/${ person.sex === 1 ? "male" : "female" }/${ person.pictureIndex }.jpg` }
          title={`Picture of ${person.firstName}`}
        />
        <CardContent>
          <Typography component="h2">
            {person.firstName} {person.lastName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </section>
);

export default PersonCard;