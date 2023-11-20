import { useState } from "react";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import ResumePDF from "../assets/Resume.pdf";

import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const isPhone = useMediaQuery("(max-width: 40em)");
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Stack
      id="resume"
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "90vh",
        alignItems: "center",
        "& > div": { overflowY: "auto" },
        "& canvas": {
          width: "100% !important",
          height: "100% !important",
        },
        "& .react-pdf__Page": { overflowY: "hide" },
        "& .react-pdf__Page > div": { display: "none" },
      }}
    >
      <Document
        file={ResumePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </Stack>
  );
}
