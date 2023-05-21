import { useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { FETCH_COMPANIES } from '../GraphQl/Queries';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Apply from './Apply';
import NavBar from './NavBar';


export default function Home(props) {

    const {error, data, loading}= useQuery(FETCH_COMPANIES)
    const [selectedCompany, setSelectedCompany] = useState(null);
    const handleCardClick = (company) => {
      setSelectedCompany(company);
    };

    if (selectedCompany) {
      return <Apply company={selectedCompany} />;
    }

    if(error) return <><p>error</p></>
    if(loading) return <><p>loading</p></>

   
  return (
    <>
    <NavBar/>
      <Typography variant="h4" gutterBottom >Job announcements</Typography>
      <Grid container spacing={3}>
        {data.companies.map(company => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card onClick={() => handleCardClick(company)} >
              <CardMedia
                component="img"
                height="140"
                image={"https://th.bing.com/th/id/R.68e5f54643fb275c6cd156e6eb48b342?rik=jaLqyA2BtauPew&pid=ImgRaw&r=0"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {company.companyName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.companyDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
