import React from "react";
import { Badge, Card, Spacer } from "@nextui-org/react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const fetchCase = async (slug: string) => {
  const res = await fetch(
    `https://sahakshak-backend.vercel.app/api/cases/${slug}`
  );
  const data = await res.json();
  return data;
};

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const caseData = await fetchCase(slug);
  console.log(caseData);

  return (
    <div className="bg-primary max-w-md ">
      <Card className="p-10">
        <h2 className="text-3xl font-bold mb-2">{caseData.title}</h2>
        <Badge color={caseData.status === "Open" ? "success" : "danger"}>
          {caseData.status}
        </Badge>
        <Spacer y={1} />

        <p className="text-gray-600 mb-4">{caseData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-2">Details</h3>

            <div className="flex items-center mb-2">
              <FaUser className="mr-2" />
              <span className="text-sm">{caseData.name}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <span className="text-sm">{caseData.address}</span>
            </div>

            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <span className="text-sm">
                {new Date(caseData.timeOfCrime).toLocaleString()}
              </span>
            </div>

            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <span className="text-sm">{caseData.email}</span>
            </div>

            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span className="text-sm">{caseData.phoneNumber}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
