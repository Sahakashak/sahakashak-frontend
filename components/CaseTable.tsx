"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Skeleton,
  Link,
} from "@nextui-org/react";
import { FaRegEye, FaTrash } from "react-icons/fa";

interface CaseData {
  _id: string;
  title: string;
  status: string;
  name: string;
  timeOfCrime: Date;
}

export default function CaseTable() {
  const [caseData, setCaseData] = useState<CaseData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://sahakshak-backend.vercel.app/api/cases", {
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data: CaseData[]) => setCaseData(data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: string) => {
    fetch("https://sahakshak-backend.vercel.app/api/cases/" + id, {
      method: "DELETE",
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then(() => setCaseData(caseData.filter((item) => item._id !== id)))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <Table aria-label="Case Data Table" className="mt-5">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Title</TableColumn>
        <TableColumn>Time Of Crime</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell>
              <Skeleton className="h-5 w-14" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-full" />
            </TableCell>
          </TableRow>
        ) : (
          caseData.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="">{item._id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                {new Date(item.timeOfCrime).toLocaleString()}
              </TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="flex gap-3">
                <Button className="bg-green-300 w-4 p-0" size="sm">
                  <Link
                    href={"cases/" + item._id}
                    className="w-full h-full text-center flex justify-center"
                  >
                    <FaRegEye className="text-green-700" />
                  </Link>
                </Button>
                <Button
                  className="bg-red-300 w-1 m-0"
                  size="sm"
                  onClick={() => handleDelete(item._id)}
                >
                  <FaTrash className="text-red-700" />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
