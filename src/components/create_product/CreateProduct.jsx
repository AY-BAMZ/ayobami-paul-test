import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, createProduct } from "../../redux";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const dispatch = useDispatch();
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  // const [files, setfiles] = useState([])
  const categoryOptions = useSelector((state) => state.category.categories);

  const newProduct = useSelector((state) => state.product.new_product);

  const handleNavigateProductPage = () => {
    navigate("/product/" + newProduct.id)
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    brand: Yup.string().required("Brand is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.string().required("Price is required"),
    stock: Yup.string().required("Stock is required"),
    rating: Yup.number().required("Rating is required"),
    selectCategory: Yup.string().required("Select a category"),
  });

  return (
    <div className={styles.createProduct}>
      <div className={styles.container}>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
            stock: "",
            selectCategory: "",
            rating: "",
            brand: "",
            // files: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            dispatch(createProduct(values));
          }}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <Form className={styles.form}>
              <h3>Create Product</h3>
              <div className={styles.input}>
                <label htmlFor="name">Name</label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" />
              </div>
              <div className={styles.input}>
                <label htmlFor="description">Description</label>
                <Field type="text" name="description" />
                <ErrorMessage name="description" />
              </div>
              <div className={styles.input}>
                <label htmlFor="price">Price</label>
                <Field type="text" name="price" />
                <ErrorMessage name="price" />
              </div>
              <div className={styles.input}>
                <label htmlFor="brand">Brand</label>
                <Field type="text" name="brand" />
                <ErrorMessage name="brand" />
              </div>
              <div className={styles.input}>
                <label htmlFor="stock">Stock</label>
                <Field type="text" name="stock" />
                <ErrorMessage name="stock" />
              </div>
              <div className={styles.input}>
                <label htmlFor="rating">Rating</label>
                <Field type="number" name="rating" />
                <ErrorMessage name="rating" />
              </div>
              <div className={styles.input}>
                <label htmlFor="rating">Category</label>
                <Field name="selectCategory" as="select">
                  <option value="">Select an option</option>
                  {categoryOptions?.map((option) => (
                    <option key={option.value} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="selectCategory" />
              </div>
              {/* <div className={styles.input}>
                <label htmlFor="files">Add files</label>
                <Field
                  name="files"
                  type="file"
                  multiple
                  as={() => (
                    <input
                      // name="files"
                      // value={values.files}

                      type="file"
                      onChange={(e) => {
                        console.log("files", e);
                        setFieldValue("files", e.target.files);
                      }}
                      multiple
                    />
                  )}
                  // value={files}
                />
                <p>{values.files.length} image files selected</p>
                <ErrorMessage name="files" />
              </div> */}
              <button type="submit" onClick={handleNavigateProductPage} disabled={isSubmitting}>
                Create Product
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateProduct;
