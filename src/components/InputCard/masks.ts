import React from "react";

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1.$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export function cardData(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 5;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/, "$1/$2");
  e.currentTarget.value = value;
  return e;
}

export function ccv(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 3;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");

  e.currentTarget.value = value;
  return e;
}

export function card(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 19;
  let value = e.currentTarget.value;
  if (!value.match(/^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{4})(\d)/, "$1 $2");
    value = value.replace(/(\d{4})(\d{4})(\d{4})$/, "$1 $2");
    e.currentTarget.value = value;
  }
  return e;
}
