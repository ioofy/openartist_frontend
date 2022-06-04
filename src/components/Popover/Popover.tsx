import React from "react";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  Fieldset,
  Flex,
  IconButton,
  Input,
  Label,
  StyledArrow,
  StyledClose,
  StyledContent,
  Text,
} from "./styles/styles";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

const PopoverDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <IconButton aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </IconButton>
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex css={{ flexDirection: "column", gap: 10 }}>
        <Text bold css={{ marginBottom: 10 }}>
          Dimensions
        </Text>
        <Fieldset>
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input id="maxWidth" defaultValue="300px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input id="maxHeight" defaultValue="none" />
        </Fieldset>
      </Flex>
      <PopoverArrow />
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);

export default PopoverDemo;
