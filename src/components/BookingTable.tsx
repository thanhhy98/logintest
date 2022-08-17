import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ReactComponent as CloseSVG } from "../svg/close.svg";
import { ReactComponent as CheckSVG } from "../svg/check.svg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Root = styled("div")({
  margin: "20px 0",
});

function createData(
  name: string,
  room: string,
  group: string,
  isRepeat: boolean,
  from: string,
  to: string
) {
  return { name, room, group, isRepeat, from, to };
}

const rows = [
  createData(
    "New meeting",
    "VIP",
    "GRP1",
    true,
    new Date().toLocaleString("vi-VN"),
    new Date().toLocaleString("vi-VN")
  ),
  createData(
    "New meeting",
    "VIP",
    "GRP3",
    false,
    new Date().toLocaleString("vi-VN"),
    new Date().toLocaleString("vi-VN")
  ),
  createData(
    "New meeting",
    "PRO",
    "GRP1",
    false,
    new Date().toLocaleString("vi-VN"),
    new Date().toLocaleString("vi-VN")
  ),
  createData(
    "New meeting",
    "PRO",
    "GRP1",
    true,
    new Date().toLocaleString("vi-VN"),
    new Date().toLocaleString("vi-VN")
  ),
  createData(
    "New meeting",
    "PRO",
    "GRP2",
    true,
    new Date().toLocaleString("vi-VN"),
    new Date().toLocaleString("vi-VN")
  ),
];

export default function BookingTable() {
  return (
    <Root>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Room</StyledTableCell>
              <StyledTableCell>Group</StyledTableCell>
              <StyledTableCell>Repeat</StyledTableCell>
              <StyledTableCell>From</StyledTableCell>
              <StyledTableCell>To</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.room}</StyledTableCell>
                <StyledTableCell>{row.group}</StyledTableCell>
                <StyledTableCell>
                  {row.isRepeat ? <CheckSVG /> : <CloseSVG />}
                </StyledTableCell>
                <StyledTableCell>{row.from}</StyledTableCell>
                <StyledTableCell>{row.to}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Root>
  );
}
