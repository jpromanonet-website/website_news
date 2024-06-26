import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@material-ui/core";
import Image from "next/image";

{/* Import projects images */}
import news01 from '../public/assets/newspapers/news01.png'

function Newspaper() {
  return (
    <div id="newspapers" className="w-full md:h-screen p-2 pt-16">
      <div className="max-w-[1240px] m-auto">
        <br/>
        <p className="uppercase text-xl tracking-widest text-[#000] mb-5">Newspaper articles (Interviews & Mentions)</p>
        <p className="py-2 text-gray-600">
          2024
        </p>
        <br/>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  29/01 - Página 12
                </Typography>
                <CardMedia style={{ width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={news01} width={300} height={150} />
                </CardMedia>
                <br/>
                <Button variant="contained" color="secondary" href="https://www.pagina12.com.ar/708029-el-gobierno-nacional-podra-privatizar-la-educacion-pero-no-l" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Read article
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat the above Grid item structure for other cards */}
        </Grid>
      </div>
    </div>
  );
}

export default Newspaper;
