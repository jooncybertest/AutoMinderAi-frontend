import { Label } from "@headlessui/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export const PrivacyPolicyModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Label className="text-sm leading-6 text-gray-600 flex items-center">
      By selecting this, you agree to our{" "}
      <Button
        onPress={onOpen}
        className="font-semibold text-indigo-600 p-1.5"
        variant="light"
      >
        privacy policy
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Privacy Policy
              </ModalHeader>
              <ModalBody>
                <p>
                  Welcome to our Privacy Policy page. When you use our services,
                  you trust us with your information. This Privacy Policy is
                  meant to help you understand what data we collect, why we
                  collect it, and what we do with it. This is important; we hope
                  you will take time to read it carefully.
                </p>
                <p>
                  Our website collects and uses personal information for various
                  purposes, such as to provide and improve our services,
                  communicate with you, and offer personalized content. We are
                  committed to protecting your privacy and ensuring that your
                  personal information is handled in a safe and responsible
                  manner.
                </p>
                <p>
                  By using our website, you agree to the collection and use of
                  information in accordance with this policy. If you have any
                  questions about our Privacy Policy, please contact us. We are
                  here to help and will gladly address any concerns you may
                  have.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Accept
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Label>
  );
};
