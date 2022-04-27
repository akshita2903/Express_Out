import React from 'react'
import { categories } from '../../constant/categories';
import{Button,makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import Create_Wali from '../Post_wala/Create_Wali';
import { Link } from 'react-router-dom'
const useStyle=makeStyles({
    create:{
        background:'#62fff',
        color:'#f2321',
        width:'86%'   
    },
    table:{
        border:'1px solid rgba(224,224,224,1)',
      
    }
});
export default function Catgories() {
  const classes=useStyle();
  return (
    <>
    <Link to='/create' style={{textDecoration:'none',color:'inherit'}}>
<Button className={classes.create} variant='contained'>Wanna Tell?</Button>
</Link>
<Table className={classes.table}>
    <TableHead>
        <TableRow>
            <TableCell>All Catgories</TableCell>

        </TableRow>

    </TableHead>
    <TableBody>
      {
     categories.map(cat =>(
         <TableRow>
             <TableCell>{cat}</TableCell>
         </TableRow>
     ))
      }  
    </TableBody>
</Table>



    </>
  )
}
