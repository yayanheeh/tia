import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Dashboard as DashboardLayout } from 'layouts';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return ( <DashboardLayout title="Typography">
    <div className={classes.root}>
<Container maxWidth="sm">

      
      <Typography variant="h4" gutterBottom>
        Dokumen Persyaratan Umroh
      </Typography>
      
      <Typography variant="body1" gutterBottom>
            Pas foto dengan latar belakang putih 4 x 6 sebanyak 6 lembar   
      </Typography>

      <Typography variant="body1" gutterBottom>
            Paspor asli yang masih berlaku dengan susunan jumlah nama 3 kata   
      </Typography>
<Typography variant="body1" gutterBottom>
            Sertifikat Vaksin Meningitis (Kartu Kuning)   
      </Typography>
<Typography variant="body1" gutterBottom>
            Buku Nikah (untuk yang berangkat dengan Suami/Istri)   
      </Typography>
<Typography variant="body1" gutterBottom>
            Fotocopy KTP   
      </Typography>
<Typography variant="body1" gutterBottom>
            Kartu Keluarga baik yang asli juga fotocopy
   
      </Typography>
<Typography variant="body1" gutterBottom>
            Tiket Pesawat PP Indonesia-Saudi Arabia
   
      </Typography>
<Typography variant="body1" gutterBottom>
            Bukti transaksi/booking akomodasi (hotel & transportasi) selama di Arab Saudi   
      </Typography>
<Typography variant="body1" gutterBottom>
            Visa Ibadah Umroh   
      </Typography>
<Typography variant="body1" gutterBottom>
            Contact Person yang bertanggung jawab atas keberadaanmu di Arab Saudi   
      </Typography>

</Container>

    </div>

</DashboardLayout>
  );
}
