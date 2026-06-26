import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const ContactModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    closeModal();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[70%] bg-body">
        <DialogTitle>Contact Us</DialogTitle>
        <div className="min-h-[60vh] flex items-center justify-center py-10 px-4 w-full">
          <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
            <div className="md:w-4/6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-x-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="focus:ring-main border-gray-700 border"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus:ring-main border-gray-700 border"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Select a Service</Label>
                  <Select onValueChange={handleServiceChange} required>
                    <SelectTrigger className="border border-gray-700">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">
                        Technical and Engineering/EPCM
                      </SelectItem>
                      <SelectItem value="logistics">
                        Logistics and Transportation
                      </SelectItem>
                      <SelectItem value="training">
                        Training for Mining Operational Personnel
                      </SelectItem>
                      <SelectItem value="tenet">
                        Tenement Administration
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Go ahead, we are listening..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="focus:ring-main border-gray-700 border"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-main hover:bg-main/90"
                >
                  Submit
                </Button>
              </form>
            </div>

            <Card className="md:w-2/6 bg-main text-white">
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription className="text-gray-200">
                  We are here to assist you. Feel free to reach out!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>Office Address:</strong>
                  <br />
                  No. 4 Apple Avenue, East Legon, Accra, GA – 372 - 7679
                </p>
                <p className="flex items-center gap-x-2">
                  <Icon icon="ic:sharp-phone" />
                  +233 30 254 3667
                </p>
                <p className="flex items-center gap-x-2">
                  <Icon icon="ic:baseline-email" />
                  operationsgh@minsolltd.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
