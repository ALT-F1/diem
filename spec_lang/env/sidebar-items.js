initSidebarItems({"constant":[["ABORTS_IF_IS_PARTIAL_PRAGMA","Pragma indicating whether aborts_if specification should be considered partial."],["ABORTS_IF_IS_STRICT_PRAGMA","Pragma indicating whether no explicit aborts_if specification should be treated like `aborts_if` false."],["INTRINSIC_PRAGMA","Pragma indicating whether implementation of function should be ignored and instead treated to be like a native function."],["REQUIRES_IF_ABORTS","Pragma indicating that requires are also enforced if the aborts condition is true."],["SCRIPT_AST_FUN_NAME",""],["SCRIPT_BYTECODE_FUN_NAME","Names used in the bytecode/AST to represent the main function of a script"],["SCRIPT_MODULE_NAME","Constants A name we use to represent a script as a module."],["VERIFY_PRAGMA","Pragma indicating whether verification should be performed for a function."]],"enum":[["TypeConstraint",""]],"struct":[["FieldData","Field Environment"],["FieldEnv",""],["FieldId","Identifier for a field of a structure, relative to struct."],["FunId","Identifier for a Move function, relative to module."],["FunctionData",""],["FunctionEnv",""],["GlobalEnv","Global Environment Global environment for a set of modules."],["GlobalId","A global id. Instances of this type represent unique identifiers relative to `GlobalEnv`."],["Loc","Locations A location, consisting of a FileId and a span in this file."],["ModuleData","Module Environment Represents data for a module."],["ModuleEnv","Represents a module environment."],["ModuleId","Identifier for a module."],["NodeId","Identifier for a node in the AST, relative to a module. This is used to associate attributes with the node, like source location and type."],["Parameter","Represents a parameter."],["SchemaId","Identifier for a schema."],["SpecFunId","Identifier for a specification function, relative to module."],["SpecVarId","Identifier for a specification variable, relative to module."],["StructData","Struct Environment"],["StructEnv",""],["StructId","Identifier for a structure/resource, relative to module."],["TypeParameter","Function Environment Represents a type parameter."]],"type":[["MoveIrLoc","Alias for the Loc variant of MoveIR. This uses a `&static str` instead of `FileId` for the file name."]]});