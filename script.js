function functionChange() {
    var functionSelected = document.getElementById("selectMenu").value;
    if (functionSelected == "fopen") {
        document.getElementById("format").innerHTML = "FILE *fopen(char *filename, char *mode);";
        document.getElementById("functionality").innerHTML = "Opens a file for reading or writing.";
        document.getElementById("mode").innerHTML = "'r' for reading, 'w' for writing, 'a' for appending, or 'r+' for both reading and writing.";
        document.getElementById("return").innerHTML = "null pointer if not successful";
        document.getElementById("tag").style.display = "block";
    }
    else if (functionSelected == "fclose") {
        document.getElementById("format").innerHTML = "int fclose(FILE *stream);";
        document.getElementById("functionality").innerHTML = "Closes a file.";
        document.getElementById("return").innerHTML = "0 if successful, EOF if not.";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "fscanf") {
        document.getElementById("format").innerHTML = "int fscanf(FILE *stream, char *format, ...);";
        document.getElementById("functionality").innerHTML = "Reads formatted data from a file.";
        document.getElementById("return").innerHTML = "number of items successfully read";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "fprintf") {
        document.getElementById("format").innerHTML = "int fprintf(FILE *stream, char *format, ...);";
        document.getElementById("functionality").innerHTML = "Writes formatted data to a file.";
        document.getElementById("return").innerHTML = "number of items successfully written";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "fread") {
        document.getElementById("format").innerHTML = "size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);";
        document.getElementById("functionality").innerHTML = "Reads data from a file.";
        document.getElementById("return").innerHTML = "number of items successfully read";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "fwrite") {
        document.getElementById("format").innerHTML = "size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);";
        document.getElementById("functionality").innerHTML = "Writes data to a file.";
        document.getElementById("return").innerHTML = "number of items successfully written";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "fseek") {
        document.getElementById("format").innerHTML = "int fseek(FILE *stream, long offset, int whence);";
        document.getElementById("functionality").innerHTML = "Changes the file position indicator for a file.";
        document.getElementById("mode").innerHTML = "SEEK_SET, SEEK_CUR, SEEK_END";
        document.getElementById("return").innerHTML = "0 if successful, EOF if not.";
        document.getElementById("tag").style.display = "block";
    }
    else if (functionSelected == "ftell") {
        document.getElementById("format").innerHTML = "long ftell(FILE *stream);";
        document.getElementById("functionality").innerHTML = "Returns the current value of the file position indicator for a file.";
        document.getElementById("return").innerHTML = "current file position";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "feof") {
        document.getElementById("format").innerHTML = "int feof(FILE *stream);";
        document.getElementById("functionality").innerHTML = "Tests for end-of-file on a file.";
        document.getElementById("return").innerHTML = "0 if not end of file, EOF if end of file.";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "ferror") {
        document.getElementById("format").innerHTML = "int ferror(FILE *stream);";
        document.getElementById("functionality").innerHTML = "Tests for error on a file.";
        document.getElementById("return").innerHTML = "0 if no error, EOF if error.";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "clearerr") {
        document.getElementById("format").innerHTML = "void clearerr(FILE *stream);";
        document.getElementById("functionality").innerHTML = "Clears any error on a file.";
        document.getElementById("return").innerHTML = "none";
        document.getElementById("tag").style.display = "none";
        document.getElementById("mode").innerHTML = "";
    }
    else if (functionSelected == "access") {
        document.getElementById("format").innerHTML = "int access(char *filename, int mode);";
        document.getElementById("functionality").innerHTML = "Checks if a file functionalities.";
        document.getElementById("mode").innerHTML = "F_OK to check for existance, R_OK to check for reading, W_OK to check for writing, and X_OK to check for file existances and grants read, write, and execute permissions";
        document.getElementById("return").innerHTML = "0 if successful, -1 if not.";
        document.getElementById("tag").style.display = "block";
    }
}