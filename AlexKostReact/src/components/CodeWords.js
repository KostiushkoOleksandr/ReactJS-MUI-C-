import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Англійська мова за професійним спрямуванням','Ревенко Людмила', 'liudmylarevenko', 'mariiapopchuk', 'lushpay '),
  createData('Тестування програмного забезпечення', 'Гаврильчик Л.', 'leonidhavrylchyk', '-', '-',),
  createData('Технології захисту інформації в компютених систем', 'Шатний С.В.', 'serhiishatnyi', '-', '-',),
  createData('Проектний менеджмент в ІТ - бізнесі', 'Данилюк Н.М.', 'nataliiadanyliuk', '-', '-'),
  createData("Об'єктно- орієнтоване програмування", 'Клебан Ю.В.', 'yuriykleban', '-', '-'),
  createData("Розробка WEB- сайтів засобами ASP.net", 'Жуковський В.В.', 'viktorzhukovskyi', '-', '-'),
  createData("Друга міноземна мова (польська)", 'Шляхта В.Ф', 'waldemarszlachta', '-', '-'),
  createData("Комп'ютерні технології редагування тексту", 'Коцюк Ю.А.', 'Meeting ID: 941 893 1623', 'Passcode: 433173', '-'),
];

export default function DenseTable() {
  return (
    <TableContainer>
      <Table sx={{ width: '1000px', m: 'auto' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Предмет</TableCell>
            <TableCell align="right">Викладач</TableCell>
            <TableCell align="right">Кодове слово(1)</TableCell>
            <TableCell align="right">Кодове слово(2)</TableCell>
            <TableCell align="right">Кодове слово(3)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
