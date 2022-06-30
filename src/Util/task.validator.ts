export const taskValidator = (title: string, date: string)
: {titleValidate: boolean, dateValidate: boolean} => {
   const isTitleValidate = title.length > 5
   const isDateValidate = new Date() < new Date(date)
   return {
      titleValidate: isTitleValidate,
      dateValidate: isDateValidate
   }
}