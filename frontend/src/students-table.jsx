import {
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import _ from "lodash";
import { LoadingButton } from "@mui/lab";
import { Form, useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
const columns = [
  {
    accessorKey: "attributes.name",
    header: "Name",
  },
  {
    accessorKey: "attributes.phone",
    header: "Phone Number",
  },
  {
    accessorKey: "attributes.roll",
    header: "Roll Number",
  },
  {
    accessorKey: "attributes.section",
    header: "Section Name",
  },
  {
    accessorKey: "attributes.standard",
    header: "Class Name",
  },
  {
    accessorKey: "attributes.email",
    header: "E-mail Address",
  },
];

const DetailPanel = ({row}) => {
  const queryClient = useQueryClient();
  const {
    register,
    control,
    formState: { isSubmitting },
  } = useForm();
  return (
    <Box>
      <Form
        control={control}
        action={`${axios.defaults.baseURL}/api/students/${row.original.id}`}
        headers={{ "Content-Type": "application/json" }}
        method="put"
        onSuccess={() =>
          queryClient.invalidateQueries({ queryKey: ["studentsData"] })
        }
        // onSubmit={(data) => console.log(data)}
      >
        <FormControl>
          <FormLabel>Student Assets</FormLabel>
          <FormGroup
            sx={{
              flexDirection: "row",
            }}
          >
            {Object.keys(row.original.attributes)
              .filter((item) => item.startsWith("has"))
              .map((item) => (
                <FormControlLabel
                  disabled={row.original.attributes[item]}
                  sx={{ flexBasis: "25%" }}
                  control={
                    <Checkbox
                      defaultChecked={row.original.attributes[item]}
                      {...register(`data.${item}`)}
                    />
                  }
                  label={_.upperCase(item.slice(3))}
                  key={item}
                />
              ))}
          </FormGroup>
        </FormControl>

        <LoadingButton
          loading={isSubmitting}
          type="submit"
          variant="contained"
          color="success"
        >
          Update Details
        </LoadingButton>
      </Form>
    </Box>
  );
};
export default function StudentsTable({ data }) {
  const table = useMaterialReactTable({
    columns,
    data,
    renderDetailPanel: ({ row }) => <DetailPanel row={row} />,
    initialState: { pagination: { pageIndex: 0, pageSize: 7 } },
  });
  return <MaterialReactTable table={table} />;
}
