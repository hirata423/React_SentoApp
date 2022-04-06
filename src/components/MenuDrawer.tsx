import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

export const MenuDrawer = (props) => {
  const { isOpen, onClose } = props;
  return (
    <>
      <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <Button w="100%">Home</Button>
              <Button w="100%">銭湯</Button>
              <Button w="100%">サウナ</Button>
              <Button w="100%">スーパー銭湯</Button>
              <Button w="100%">近くの銭湯</Button>
              <Button w="100%">ガイド</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
