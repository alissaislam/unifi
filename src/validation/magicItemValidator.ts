
import { validationResult,checkSchema, Schema, CustomValidator } from 'express-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';

const isPositiveNumber: CustomValidator = (value) => {
  if (value > 0) {
    return true;
  }
  throw new Error('Weight must be a positive number');
};

const magicItemSchema: Schema = {
  name: {
    notEmpty: true,
    errorMessage: 'Name is required',
  },
  weight: {
    isNumeric: {
      errorMessage: 'Weight must be a number',
    },
    custom: {
      options: isPositiveNumber,
    },
  },
};

export const validateMagicItem = [
  checkSchema(magicItemSchema),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
]as RequestHandler[];
