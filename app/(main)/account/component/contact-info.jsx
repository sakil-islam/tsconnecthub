"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { updateUserContact } from "@/app/actions/account";
import { toast } from "sonner";

const ContactInfo = ({ userInfo }) => {
  const [contactInfo, setContactInfo] = useState({
    phone: userInfo?.phone,
    socialMedia: userInfo?.socialMedia,
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setContactInfo({
      ...ContactInfo,
      [field]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(contactInfo);

    try {
      await updateUserContact(userInfo?.email, contactInfo);
      toast.success("User Contact updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <Label className="mb-2 block">Phone No. :</Label>
            <Input
              name="phone"
              id="phone"
              type="number"
              placeholder="Phone :"
              onChange={handleChange}
              value={contactInfo?.phone}
            />
          </div>
          <div>
            <Label className="mb-2 block">Website :</Label>
            <Input
              name="socialMedia"
              id="socialMedia"
              type="url"
              onChange={handleChange}
              value={contactInfo?.socialMedia}
              placeholder="Url :"
            />
          </div>
        </div>
        <Button className="mt-5" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default ContactInfo;
