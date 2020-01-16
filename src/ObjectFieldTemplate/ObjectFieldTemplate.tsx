import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import { ObjectFieldTemplateProps } from 'react-jsonschema-form';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
});

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {
  const classes = useStyles();
  const newTitle =
    uiSchema['ui:title'] !== null && uiSchema['ui:title'] !== undefined
      ? uiSchema['ui:title']
      : title;

  return (
    <>
      {newTitle && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={newTitle}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      <Grid container={true} spacing={2} className={classes.root}>
        {properties.map((element: any, index: number) => (
          <Grid
            item={true}
            xs={12}
            key={index}
            style={{ marginBottom: '10px' }}
          >
            {element.content}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ObjectFieldTemplate;
