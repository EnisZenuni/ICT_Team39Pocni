import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { FETCH_COMPANIES } from '../GraphQl/Queries';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


export default function Home(props) {

    const {error, data, loading}= useQuery(FETCH_COMPANIES)

    if(error) return <><p>error</p></>
    if(loading) return <><p>loading</p></>

   
  return (
    <>
      <Typography variant="h4" gutterBottom >Job announcements</Typography>
      <Grid container spacing={3}>
        {data.companies.map(company => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={"company.logoUrl"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.companies.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.companies.companyDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
